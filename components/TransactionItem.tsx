import React from 'react';
import { View, Text } from 'react-native';
import { Send, Download } from 'lucide-react-native';

export default function TransactionItem({ transaction }) {
  return (
    <View className="flex-row items-center justify-between py-3 border-b border-zinc-800">
      <View className="flex-row items-center">
        <View className={`w-10 h-10 rounded-full items-center justify-center ${transaction.type === 'sent' ? 'bg-red-500/20' : 'bg-green-500/20'}`}>
          {transaction.type === 'sent' ? (
            <Send color={transaction.type === 'sent' ? '#EF4444' : '#22C55E'} size={20} />
          ) : (
            <Download color={transaction.type === 'sent' ? '#EF4444' : '#22C55E'} size={20} />
          )}
        </View>
        <View className="ml-3">
          <Text className="text-white font-medium">
            {transaction.type === 'sent' ? 'Sent to' : 'Received from'}
          </Text>
          <Text className="text-zinc-400 text-sm">
            {transaction.type === 'sent' ? transaction.to : transaction.from}
          </Text>
        </View>
      </View>
      <View className="items-end">
        <Text className={`font-medium ${transaction.type === 'sent' ? 'text-red-500' : 'text-green-500'}`}>
          {transaction.amount > 0 ? '+' : ''}{transaction.amount} {transaction.token}
        </Text>
        <Text className="text-zinc-400 text-sm">{transaction.date}</Text>
      </View>
    </View>
  );
}