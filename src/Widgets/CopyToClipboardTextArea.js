import React, { Component } from 'react';

export default class CopyToClipboardTextArea extends Component {

    copyCodeToClipboard = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy");
    }

    render() {
        return (
            <>
                <div>
                    <textarea
                        className="textArea"
                        title="click to copy" onClick={() => this.copyCodeToClipboard()}
                        ref={(textarea) => this.textArea = textarea}
                        value={this.props.text}
                    />
                    {/* <span class="ui-icon ui-icon-arrowthick-1-n" className="copyIcon">c</span> */}
                </div>
            </>
        )
    }
}