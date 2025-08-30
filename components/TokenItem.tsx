import React from 'react';
import { View, Text } from 'react-native';
import { Check } from 'lucide-react-native';

export default function TokenItem({ token, showBalance = false, showValue = false, isSelected = false }) {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center">
        <View className="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: token.color + '20' }}>
          <Text className="font-bold text-white">{token.symbol.charAt(0)}</Text>
        </View>
        <View className="ml-3">
          <Text className="text-white font-semibold">{token.name}</Text>
          {showBalance && (
            <Text className="text-zinc-400">{token.balance} {token.symbol}</Text>
          )}
        </View>
      </View>
      
      <View className="flex-row items-center">
        {showValue && (
          <Text className="text-white font-semibold mr-3">${token.value.toFixed(2)}</Text>
        )}
        {isSelected && (
          <Check color="#22C55E" size={20} />
        )}
      </View>
    </View>
  );
}