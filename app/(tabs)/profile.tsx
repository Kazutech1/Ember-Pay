import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { Svg, Path } from "react-native-svg";

const SettingsIcon = ({ color = "#71717A", size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71L16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.2573 9.77251 19.9887C9.5799 19.7201 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const ChevronRightIcon = ({ color = "#71717A", size = 16 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M9 18L15 12L9 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const WalletIcon = ({ color = "#71717A", size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M21 12V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V16M21 12C21 10.8954 20.1046 10 19 10H15C13.8954 10 13 10.8954 13 12C13 13.1046 13.8954 14 15 14H19C20.1046 14 21 13.1046 21 12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const SecurityIcon = ({ color = "#71717A", size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M9 12L11 14L22 3M21 12V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5C3 4.44772 3.44772 4 4 4H16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const HelpIcon = ({ color = "#71717A", size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const LogoutIcon = ({ color = "#EF4444", size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const MenuItemCard = ({ icon, title, subtitle = null, onPress, showArrow = true, textColor = "text-white" }) => (
  <TouchableOpacity 
    onPress={onPress}
    className="flex-row items-center p-4 bg-zinc-900/60 rounded-2xl mb-3"
  >
    <View className="w-10 h-10 bg-zinc-800 rounded-xl items-center justify-center mr-4">
      {icon}
    </View>
    <View className="flex-1">
      <Text className={`${textColor} font-semibold text-base`}>{title}</Text>
      {subtitle && <Text className="text-zinc-400 text-sm">{subtitle}</Text>}
    </View>
    {showArrow && <ChevronRightIcon />}
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const handleLogout = () => {
    // Navigate back to onboarding
    router.dismissAll();
    router.replace('/');
  };

  return (
    <View className="flex-1 bg-zinc-950">
      <StatusBar style="light" backgroundColor="#09090B" />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          <View className="flex-row items-center justify-between mb-8">
            <Text className="text-white text-2xl font-bold">Profile</Text>
            <TouchableOpacity className="w-10 h-10 bg-zinc-800 rounded-full items-center justify-center">
              <SettingsIcon />
            </TouchableOpacity>
          </View>

          {/* Profile Info */}
          <View className="items-center mb-8">
            <View className="w-24 h-24 border-red-200 rounded-full items-center justify-center mb-4">
              <Text className="text-white text-3xl font-bold">JD</Text>
            </View>
            <Text className="text-white text-xl font-bold">John Doe</Text>
            <Text className="text-zinc-400 text-sm">john.doe@example.com</Text>
            <View className="flex-row items-center mt-2">
              <View className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              <Text className="text-green-500 text-sm">Verified Account</Text>
            </View>
          </View>

          {/* Account Stats */}
          <View className="flex-row justify-between mb-8">
            <View className="bg-zinc-900/60 rounded-2xl p-4 flex-1 mr-2">
              <Text className="text-zinc-400 text-sm">Total Balance</Text>
              <Text className="text-white text-xl font-bold">$12,458</Text>
            </View>
            <View className="bg-zinc-900/60 rounded-2xl p-4 flex-1 ml-2">
              <Text className="text-zinc-400 text-sm">This Month</Text>
              <Text className="text-green-500 text-xl font-bold">+$1,245</Text>
            </View>
          </View>

          {/* Menu Items */}
          <View className="space-y-3">
            <MenuItemCard 
              icon={<WalletIcon color="#DC2626" />}
              title="My Wallet"
              subtitle="Manage your crypto assets"
            />
            
            <MenuItemCard 
              icon={<SecurityIcon color="#059669" />}
              title="Security"
              subtitle="2FA, biometrics, backup"
            />
            
            <MenuItemCard 
              icon={<SettingsIcon color="#7C3AED" />}
              title="Settings"
              subtitle="App preferences & notifications"
            />
            
            <MenuItemCard 
              icon={<HelpIcon color="#F59E0B" />}
              title="Help & Support"
              subtitle="FAQs, contact us"
            />
            
            <View className="pt-4">
              <MenuItemCard 
                icon={<LogoutIcon />}
                title="Sign Out"
                textColor="text-red-500"
                showArrow={false}
                onPress={handleLogout}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}