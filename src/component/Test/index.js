import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Richard'
        };
    }

    static propTypes = {
        intl: PropTypes.object
    }

    componentDidMount() {
    }

    render() {
        return <div>
                <div>
                    <FormattedMessage
                        id = "Test.content"
                        defaultMessage = "自定义组件"
                    />
                </div>

                <div>
                    <FormattedMessage
                        id = "Test.formattedContent"
                        defaultMessage="{name}, 你好!"
                        values = {{name: this.state.name}}
                    />
                </div>
            </div>;
    }
}
