import { View, StyleSheet, ScrollView, Text,} from 'react-native';
import React from 'react';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import {humanTall} from 'react-native-typography';

export function HumanTallExample() {
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-typography humanTall">
          {Object.entries(humanTall).map((data: any,index) => {
            const itemStyle = StyleSheet.create(data[1]);
            return ( !data[0].includes('Object') &&
              <TestCase key={index} itShould={JSON.stringify(itemStyle)}>
                <View style={{backgroundColor:data[0].includes('White') ?'black':'white' }}>
                  <Text style={itemStyle}> {data[0]}</Text>
                </View>
              </TestCase>
            );
          })}
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}