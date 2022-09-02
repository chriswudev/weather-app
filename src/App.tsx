import React from 'react';
import { Layout, Tabs } from 'antd';
import Weather from './containers/Weather';
import { City } from './types';
import './styles/app.less';

const { Content } = Layout;
const { TabPane } = Tabs;

const cities: City[] = [
  { name: 'Ottawa', location: { lat: 45.421, lon: -75.69 } },
  { name: 'London', location: { lat: 51.509865, lon: -0.118092 } },
  { name: 'Tokyo', location: { lat: 35.658611111111, lon: 139.74555555556 } },
];

type AppProps = {};

type AppState = {
  selectedCity: number;
};

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    selectedCity: 0,
  };
  handleTabChange = (selectedCity: string) => {
    this.setState({ selectedCity: parseInt(selectedCity) });
  };
  render(): React.ReactNode {
    return (
      <Layout className="layout">
        <Content className="content">
          <Tabs
            activeKey={`${this.state.selectedCity}`}
            centered
            onChange={this.handleTabChange}
          >
            {cities.map((city, index) => (
              <TabPane tab={city.name} key={index}></TabPane>
            ))}
          </Tabs>
          <Weather city={cities[this.state.selectedCity]} />
        </Content>
      </Layout>
    );
  }
}

export default App;
