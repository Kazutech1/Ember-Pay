import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { X } from 'lucide-react-native';

export default function QRScannerModal({ visible, onClose, onScan }) {
  const handleFakeScan = () => {
    // Simulate a QR code scan for demo purposes
    // In a real app, this would use a QR scanner library
    onScan("0x742d35Cc6634C8932921218cC6C45D72eA7e87b1");
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <View className="flex-1 bg-black">
        <View className="pt-16 px-6 pb-6 bg-zinc-900">
          <View className="flex-row justify-between items-center">
            <Text className="text-white font-bold text-lg">Scan QR Code</Text>
            <TouchableOpacity onPress={onClose}>
              <X color="white" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View className="flex-1 items-center justify-center">
          <View className="w-64 h-64 border-2 border-red-500 rounded-xl mb-8">
            <View className="flex-1 bg-zinc-800/50 items-center justify-center">
              <Text className="text-white text-center mb-4">Scanner View</Text>
              <TouchableOpacity 
                className="bg-red-600 px-4 py-2 rounded-lg"
                onPress={handleFakeScan}
              >
                <Text className="text-white">Simulate Scan</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <Text className="text-white text-lg font-medium mb-2">Align QR code within frame</Text>
          <Text className="text-zinc-400 text-center">Scan a QR code to quickly enter an address</Text>
        </View>
      </View>
    </Modal>
  );
}