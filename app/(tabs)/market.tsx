import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Search, TrendingUp, TrendingDown } from 'lucide-react-native';

const SearchIcon = ({ color = "#71717A", size = 20 }) => (
  <Search color={color} size={size} />
);

const TrendingUpIcon = ({ color = "#22C55E", size = 16 }) => (
  <TrendingUp color={color} size={size} />
);

const TrendingDownIcon = ({ color = "#EF4444", size = 16 }) => (
  <TrendingDown color={color} size={size} />
);

const CryptoItem = ({ name, symbol, price, change, isPositive = true, icon }) => (
  <TouchableOpacity className="flex-row items-center justify-between p-4 bg-zinc-900/60 rounded-2xl mb-3">
    <View className="flex-row items-center flex-1">
      <View className="w-12 h-12 bg-zinc-800 rounded-full items-center justify-center mr-3">
        {icon}
      </View>
      <View className="flex-1">
        <Text className="text-white font-semibold text-base">{name}</Text>
        <Text className="text-zinc-400 text-sm">{symbol}</Text>
      </View>
    </View>
    <View className="items-end">
      <Text className="text-white text-lg font-bold">${price}</Text>
      <View className="flex-row items-center">
        {isPositive ? <TrendingUpIcon /> : <TrendingDownIcon />}
        <Text className={`text-sm font-medium ml-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {change}%
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const CategoryTab = ({ title, isActive, onPress }) => (
  <TouchableOpacity 
    onPress={onPress}
    className={`px-6 py-2 rounded-full mr-3 ${isActive ? 'bg-red-600' : 'bg-zinc-800'}`}
  >
    <Text className={`font-medium ${isActive ? 'text-white' : 'text-zinc-400'}`}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default function MarketScreen() {
  return (
    <View className="flex-1 bg-zinc-950">
      <StatusBar style="light" backgroundColor="#09090B" />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          <View className="flex-row items-center justify-between mb-8">
            <Text className="text-white text-2xl font-bold">Markets</Text>
            <TouchableOpacity className="w-10 h-10 bg-zinc-800 rounded-full items-center justify-center">
              <SearchIcon />
            </TouchableOpacity>
          </View>

          {/* Portfolio Summary */}
          <View className="bg-zinc-900/60 rounded-3xl p-6 mb-8">
            <Text className="text-zinc-400 text-sm mb-2">Portfolio Value</Text>
            <Text className="text-white text-3xl font-bold mb-4">$8,456.32</Text>
            <View className="flex-row items-center">
              <TrendingUpIcon />
              <Text className="text-green-500 text-sm font-medium ml-1">+12.5%</Text>
              <Text className="text-zinc-400 text-sm ml-2">24h change</Text>
            </View>
          </View>

          {/* Category Tabs */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
            <View className="flex-row">
              <CategoryTab title="All" isActive={true} />
              <CategoryTab title="Favorites" isActive={false} />
              <CategoryTab title="DeFi" isActive={false} />
              <CategoryTab title="NFT" isActive={false} />
              <CategoryTab title="Metaverse" isActive={false} />
            </View>
          </ScrollView>

          {/* Market List */}
          <View>
            <CryptoItem 
              name="Bitcoin"
              symbol="BTC"
              price="43,250.00"
              change="+2.45"
              isPositive={true}
              icon={<Text className="text-orange-500 text-lg font-bold">₿</Text>}
            />
            
            <CryptoItem 
              name="Ethereum"
              symbol="ETH"
              price="2,845.60"
              change="+1.23"
              isPositive={true}
              icon={<Text className="text-blue-400 text-lg font-bold">Ξ</Text>}
            />
            
            <CryptoItem 
              name="Cardano"
              symbol="ADA"
              price="0.48"
              change="-0.85"
              isPositive={false}
              icon={<Text className="text-blue-500 text-lg font-bold">₳</Text>}
            />
            
            <CryptoItem 
              name="Solana"
              symbol="SOL"
              price="98.74"
              change="+5.67"
              isPositive={true}
              icon={<Text className="text-purple-500 text-lg font-bold">◎</Text>}
            />
            
            <CryptoItem 
              name="Polygon"
              symbol="MATIC"
              price="0.89"
              change="-2.15"
              isPositive={false}
              icon={<Text className="text-purple-400 text-lg font-bold">⬟</Text>}
            />
            
            <CryptoItem 
              name="Chainlink"
              symbol="LINK"
              price="14.56"
              change="+3.42"
              isPositive={true}
              icon={<Text className="text-blue-600 text-lg font-bold">⬢</Text>}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}