import { PermissionsAndroid } from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';
import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:5000';

// Request SMS Permission
export const requestSmsPermission = async () => {
  try {
    const permissions = [PermissionsAndroid.PERMISSIONS.READ_SMS];

    // For Android 13+ request additional permission
    if (Platform.Version >= 33) {
      permissions.push(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    }

    const granted = await PermissionsAndroid.requestMultiple(permissions);

    return (
      granted[PermissionsAndroid.PERMISSIONS.READ_SMS] === PermissionsAndroid.RESULTS.GRANTED
    );
  } catch (err) {
    console.warn('Permission Error:', err);
    return false;
  }
};

// Fetch and Parse M-Pesa Messages
export const fetchMpesaMessages = async () => {
  if (await requestSmsPermission()) {
    SmsAndroid.list(
      JSON.stringify({
        box: 'inbox',
        maxCount: 100,
      }),
      (fail) => console.error('Error:', fail),
      (count, smsList) => {
        console.log(`Total messages fetched: ${count}`);
        const messages = JSON.parse(smsList);
        console.log('Fetched Messages:', messages);
        const mpesaMessages = messages.filter((msg) =>
          msg.body.includes('M-PESA')
        );

        mpesaMessages.forEach(async (msg) => {
          const transaction = parseMpesaMessage(msg.body);
          if (transaction) await sendTransactionToServer(transaction);
        });
      }
    );
  }
};

// Parse Transaction Data
  const detectCategory = (message) => {
    if (message.includes('Safaricom')) return 'Airtime';
    if (message.includes('sent to')) return 'Transfer';
    if (message.includes('Shop') || message.includes('Till')) return 'Shopping';
    if (message.includes('pay bill')) return 'Bills';
    if (message.includes('received')) return 'Income';
    return 'Other';
  };
  
  // Updated Parser
  const parseMpesaMessage = (message) => {
    const amountRegex = /Ksh(\d+\.?\d*)/i;
    const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
  
    const amount = parseFloat(message.match(amountRegex)?.[1] || '0');
    const date = message.match(dateRegex)?.[0] || 'Unknown';
    const category = detectCategory(message);
  
    return { amount, date, category, description: message };
  };
  

// Send Transaction to Flask
const sendTransactionToServer = async (transaction) => {
  try {
    await axios.post(`${BASE_URL}/transactions`, transaction);
    console.log('Transaction saved:', transaction);
  } catch (error) {
    console.error('Error saving transaction:', error);
  }
};
