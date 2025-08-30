import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft, Copy, Download, QrCode } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import TokenItem from '../../components/TokenItem';

// Sample data
const tokens = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', balance: 0.0543, value: 2345.67, color: '#F7931A' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', balance: 1.23, value: 3456.78, color: '#627EEA' },
  { id: 3, name: 'Solana', symbol: 'SOL', balance: 12.5, value: 1234.56, color: '#9945FF' },
];

export default function ReceiveScreen() {
  const navigation = useNavigation();
  const [selectedToken, setSelectedToken] = useState(tokens[0]);

  const handleShareAddress = () => {
    // In a real app, this would share the address using the device's sharing capabilities
    alert(`Sharing address: 0x8a3dC8E34A5a579D3e7F2C1a865Fc7`);
  };

  const handleCopyAddress = () => {
    // In a real app, this would copy to clipboard
    alert('Address copied to clipboard!');
  };

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
        <Text className="text-white text-2xl font-bold">Receive Crypto</Text>
      </View>

      <ScrollView className="flex-1 px-6 pb-8" contentContainerStyle={{ alignItems: 'center' }}>
        <View className="bg-zinc-900/60 p-6 rounded-3xl items-center w-full mb-6">
          <View className="w-64 h-64 bg-white rounded-xl items-center justify-center mb-6">
            <QrCode size={150} color="black" />
          </View>
          
          <Text className="text-white font-bold text-lg mb-2">Your {selectedToken.name} Address</Text>
          <View className="flex-row items-center bg-zinc-800 p-3 rounded-lg mb-4">
            <Text className="text-white text-sm mr-2">0x8a3dC8E34A5a579D3e7F2C1a865Fc7</Text>
            <TouchableOpacity onPress={handleCopyAddress}>
              <Copy color="#71717A" size={16} />
            </TouchableOpacity>
          </View>
          
          <Text className="text-zinc-400 text-center text-sm mb-6">
            Send only {selectedToken.name} ({selectedToken.symbol}) to this address.
            Sending any other coin may result in permanent loss.
          </Text>
          
          <TouchableOpacity 
            className="flex-row items-center bg-red-600 px-6 py-3 rounded-full"
            onPress={handleShareAddress}
          >
            <Download color="white" size={18} />
            <Text className="text-white font-medium ml-2">Share Address</Text>
          </TouchableOpacity>
        </View>
        
        <Text className="text-white font-bold text-lg mb-4 self-start">Your Tokens</Text>
        {tokens.map(token => (
          <TouchableOpacity 
            key={token.id} 
            className="w-full mb-3"
            onPress={() => setSelectedToken(token)}
          >
            <TokenItem 
              token={token} 
              showBalance={true} 
              showValue={true} 
              isSelected={selectedToken.id === token.id}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}