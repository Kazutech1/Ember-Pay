import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Send, ArrowDownToLine, QrCode, MoreHorizontal, ArrowUpRight, ArrowDownRight } from "lucide-react-native";
import { router } from 'expo-router';

const QuickActionIcon = ({ children, color = "#DC2626" }) => (
  <View className={`w-12 h-12 rounded-xl items-center justify-center`} style={{ backgroundColor: `${color}20` }}>
    {children}
  </View>
);

const TransactionItem = ({ type, amount, time, status }) => (
  <View className="flex-row items-center justify-between p-4 bg-zinc-900/60 rounded-2xl mb-3">
    <View className="flex-row items-center flex-1">
      <View className={`w-10 h-10 rounded-full items-center justify-center ${type === 'received' ? 'bg-green-600/20' : 'bg-red-600/20'}`}>
        {type === 'received' ? 
          <ArrowDownRight color="#22C55E" size={20} /> : 
          <ArrowUpRight color="#EF4444" size={20} />
        }
      </View>
      <View className="ml-3 flex-1">
        <Text className="text-white font-semibold text-base">
          {type === 'received' ? 'Received' : 'Sent'}
        </Text>
        <Text className="text-zinc-400 text-sm">{time}</Text>
      </View>
    </View>
    <View className="items-end">
      <Text className={`text-lg font-bold ${type === 'received' ? 'text-green-500' : 'text-white'}`}>
        {type === 'received' ? '+' : '-'}${amount}
      </Text>
      <Text className={`text-xs ${status === 'completed' ? 'text-green-500' : 'text-yellow-500'}`}>
        {status}
      </Text>
    </View>
  </View>
);



export default function HomeScreen() {


    const handleSend = () => {
      router.push('/(trans)/send');    
    };

     const handleRecieve = () => {
      router.push('/(trans)/recieve');    
    };
  
    // const handleScan = () => {
    //   router.push('/(trans)/scanner');    
    // };
  

  return (
    <View className="flex-1 bg-zinc-950">
      <StatusBar style="light" backgroundColor="#09090B" />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          <View className="flex-row items-center justify-between mb-8">
            <View>
              <Text className="text-zinc-400 text-sm">Good morning</Text>
              <Text className="text-white text-2xl font-bold">Welcome back</Text>
            </View>
            <TouchableOpacity className="w-10 h-10 bg-zinc-800 rounded-full items-center justify-center">
              <View className="w-6 h-6 bg-red-600 rounded-full" />
            </TouchableOpacity>
          </View>

          {/* Balance Card */}
          <View className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-6 mb-8">
            <Text className="text-red-100 text-sm mb-2">Total Balance</Text>
            <Text className="text-white text-4xl font-bold mb-4">$12,458.50</Text>
            <View className="flex-row items-center">
              <View className="flex-row items-center mr-4">
                <View className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                <Text className="text-red-100 text-sm">+2.45%</Text>
              </View>
              <Text className="text-red-200 text-sm">from last month</Text>
            </View>
          </View>

          {/* Quick Actions */}
          <View className="mb-8">
            <Text className="text-white text-lg font-semibold mb-4">Quick Actions</Text>
            <View className="flex-row justify-around">
              <TouchableOpacity className="items-center"
               onPress={handleSend}
               >
                <QuickActionIcon color="#DC2626">
                  <Send color="#DC2626" size={24} />
                </QuickActionIcon>
                <Text className="text-white text-sm mt-2">Send</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="items-center"
                             onPress={handleRecieve}
>
                <QuickActionIcon color="#059669">
                  <ArrowDownToLine color="#059669" size={24} />
                </QuickActionIcon>
                <Text className="text-white text-sm mt-2">Receive</Text>
              </TouchableOpacity>
              
              {/* <TouchableOpacity className="items-center"
                                           onPress={handleScan}
>
                <QuickActionIcon color="#7C3AED">
                  <QrCode color="#7C3AED" size={24} />
                </QuickActionIcon>
                <Text className="text-white text-sm mt-2">Scan</Text>
              </TouchableOpacity>
               */}
              <TouchableOpacity className="items-center">
                <QuickActionIcon color="#F59E0B">
                  <MoreHorizontal color="#F59E0B" size={24} />
                </QuickActionIcon>
                <Text className="text-white text-sm mt-2">More</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Recent Transactions */}
          <View>
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-white text-lg font-semibold">Recent Transactions</Text>
              <TouchableOpacity>
                <Text className="text-red-500 text-sm font-medium">See All</Text>
              </TouchableOpacity>
            </View>
            
            <TransactionItem 
              type="received" 
              amount="1,250.00" 
              time="2 hours ago" 
              status="completed" 
            />
            <TransactionItem 
              type="sent" 
              amount="89.50" 
              time="5 hours ago" 
              status="completed" 
            />
            <TransactionItem 
              type="sent" 
              amount="2,100.00" 
              time="1 day ago" 
              status="pending" 
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}