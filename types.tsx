export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: {
    scannedData: string
  };
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  TabOneNestedScreen: {
    scannedData: string
  };
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
