import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft, Scan, Send, Download } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import TokenSelectorModal from '../../components/TokenSelectorModal';
import QRScannerModal from '../../components/QRScannerModal';
import TransactionItem from '../../components/TransactionItem';
import TokenItem from '../../components/TokenItem';

// Sample data
const tokens = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', balance: 0.0543, value: 2345.67, color: '#F7931A' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', balance: 1.23, value: 3456.78, color: '#627EEA' },
  { id: 3, name: 'Solana', symbol: 'SOL', balance: 12.5, value: 1234.56, color: '#9945FF' },
];

const transactions = [
  { id: 1, type: 'sent', to: '0x742d35Cc...', amount: -0.005, token: 'BTC', date: 'Today, 14:32' },
  { id: 2, type: 'received', from: '0x89205A3a...', amount: 1.5, token: 'ETH', date: 'Yesterday, 09:15' },
  { id: 3, type: 'sent', to: '0x553a1fCc...', amount: -5.2, token: 'SOL', date: 'Oct 12, 16:40' },
];

export default function SendScreen() {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [showTokenSelector, setShowTokenSelector] = useState(false);
  const [showScanModal, setShowScanModal] = useState(false);
  const [selectedToken, setSelectedToken] = useState(tokens[0]);

  return (
    <View className="flex-1 bg-zinc-950">
      <StatusBar style="light" />
      
      {/* Header */}
      <View className="px-6 pt-16 pb-4 flex-row items-center">
        <TouchableOpacity 
          className="mr-4"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft color="white" size={24} />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Send Crypto</Text>
      </View>

      <ScrollView className="flex-1 px-6 pb-8" showsVerticalScrollIndicator={false}>
        {/* Token Selector */}
        <TouchableOpacity 
          className="flex-row items-center justify-between bg-zinc-900/60 p-4 rounded-2xl mb-6"
          onPress={() => setShowTokenSelector(true)}
        >
          <TokenItem token={selectedToken} showBalance={true} />
        </TouchableOpacity>

        {/* Amount Input */}
        <View className="bg-zinc-900/60 p-4 rounded-2xl mb-6">
          <Text className="text-zinc-400 text-sm mb-2">Amount</Text>
          <View className="flex-row items-center justify-between">
            <TextInput
              className="text-white text-2xl font-bold flex-1"
              placeholder="0.0"
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
              placeholderTextColor="#71717A"
            />
            <Text className="text-zinc-400">${selectedToken.value.toFixed(2)}</Text>
          </View>
        </View>

        {/* Address Input */}
        <View className="bg-zinc-900/60 p-4 rounded-2xl mb-6">
          <Text className="text-zinc-400 text-sm mb-2">Recipient Address</Text>
          <View className="flex-row items-center">
            <TextInput
              className="text-white text-base flex-1"
              placeholder="Enter wallet address"
              value={address}
              onChangeText={setAddress}
              placeholderTextColor="#71717A"
            />
            <TouchableOpacity 
              className="ml-2 p-2 bg-zinc-800 rounded-lg"
              onPress={() => setShowScanModal(true)}
            >
              <Scan color="white" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Transaction Details */}
        <View className="bg-zinc-900/60 p-4 rounded-2xl mb-6">
          <View className="flex-row justify-between py-2">
            <Text className="text-zinc-400">Network Fee</Text>
            <Text className="text-white">0.0001 BTC ≈ $4.32</Text>
          </View>
          <View className="flex-row justify-between py-2">
            <Text className="text-zinc-400">You will send</Text>
            <Text className="text-white">{amount || '0'} {selectedToken.symbol}</Text>
          </View>
          <View className="flex-row justify-between py-2">
            <Text className="text-zinc-400">Recipient will receive</Text>
            <Text className="text-white">{(parseFloat(amount) || 0) - 0.0001} {selectedToken.symbol}</Text>
          </View>
        </View>

        {/* Send Button */}
        <TouchableOpacity 
          className="bg-red-600 p-5 rounded-2xl items-center mb-8"
          disabled={!amount || !address}
          style={{ opacity: !amount || !address ? 0.5 : 1 }}
        >
          <Text className="text-white font-bold text-lg">Send Now</Text>
        </TouchableOpacity>

        {/* Recent Transactions */}
        <Text className="text-white font-bold text-lg mb-4">Recent Transactions</Text>
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ScrollView>

      {/* Modals */}
      <TokenSelectorModal
        visible={showTokenSelector}
        onClose={() => setShowTokenSelector(false)}
        tokens={tokens}
        selectedToken={selectedToken}
        onSelectToken={setSelectedToken}
      />
      
      <QRScannerModal
        visible={showScanModal}
        onClose={() => setShowScanModal(false)}
        onScan={(data) => {
          setAddress(data);
          setShowScanModal(false);
        }}
      />
    </View>
  );
}