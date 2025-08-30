import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { X } from 'lucide-react-native';
import TokenItem from './TokenItem';

export default function TokenSelectorModal({ visible, onClose, tokens, selectedToken, onSelectToken }) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <View className="flex-1 bg-black/70 justify-end">
        <View className="bg-zinc-900 rounded-t-3xl p-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-white font-bold text-lg">Select Token</Text>
            <TouchableOpacity onPress={onClose}>
              <X color="white" size={24} />
            </TouchableOpacity>
          </View>
          
          {tokens.map(token => (
            <TouchableOpacity 
              key={token.id}
              className="py-4 border-b border-zinc-800"
              onPress={() => {
                onSelectToken(token);
                onClose();
              }}
            >
              <TokenItem token={token} showBalance={true} showValue={true} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
}