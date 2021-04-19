import React from 'react';
import DashboardPage from './Pages/DashboardPage';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import Client from './Services/GraphQL/Client';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={Client}>
          <DashboardPage  />
      </ApolloProvider>
    );
  }
}

export default App;
