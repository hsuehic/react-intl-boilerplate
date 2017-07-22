import React, { Component } from 'react';
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';

import logo from './logo.svg';
import './App.css';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

import Test from './component/Test';

addLocaleData([...zh,...en]);


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: 'zh-CN',
            messages: zhCN
        };
    }
    setLocale(locale) {
        let messages = zhCN;
        switch (locale) {
            case 'zh-CN':
                messages = zhCN;
                break;
            case 'en-US':
                messages = enUS;
                break;
            default:
                break;
        }
        this.setState({ locale, messages });
    }
    render() {
        return (
        <IntlProvider locale={ this.state.locale } messages= {this.state.messages} >
            <div className="App">
                <ul><li onClick={this.setLocale.bind(this, 'zh-CN')}>中文</li><li onClick={this.setLocale.bind(this, 'en-US')}>English</li></ul>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2><FormattedMessage id="App.title" defaultMessage="Wellcome to React" /></h2>
                </div>
                <p className="App-intro">
                    <FormattedMessage id="App.content" defaultMessage="To get started, edit and save {code} to reload" values={{code: 'src/App.js'}} />
                </p>
                <Test />
            </div>
        </IntlProvider>
        );
    }
}

export default App;
