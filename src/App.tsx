import React from 'react';
import {Popover} from 'antd';
import './App.css';

function App() {
    const renderProfile = () => {
        return (
            <div
                style={{
                    width: 280,
                    height: 535,
                    backgroundColor: 'gainsboro',
                }}
            >
                aaaaaaaaaaaaa
            </div>
        );
    }

    const renderPopover = (i: number) => {
        const ccc = (i + 15) * 5;
        return <Popover
            key={i}
            placement={'rightBottom'}
            content={renderProfile()}
            trigger="click"
            destroyTooltipOnHide={true}
            getPopupContainer={() => document.getElementById('root') as HTMLElement }
        >
            <div
                style={{width: 136, height: 136, backgroundColor: `rgb(${ccc},${ccc}, ${ccc})`}}
            >{i}</div>
        </Popover>
    }

    const items = [];
    for (let i = 0; i < 20; i++) {
        items.unshift(renderPopover(i));
    }

    return (
        <div className="App">
            {items}
        </div>
    );
}

export default App;
