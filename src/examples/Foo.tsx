import React from 'react';

export type FooData = {
    value: number;
};

type FooProps = {
    children: (data: FooData) => React.ReactNode;
};

type FooState = {
    data: FooData;
};

export class Foo extends React.PureComponent<FooProps, FooState> {
    state = {
        data: {
            value: 1,
        },
    };

    render() {
        return (
            <div>
                {
                    this.props.children(this.state.data)
                }
                <p>PPPPP</p>
            </div>
        )
    }
}