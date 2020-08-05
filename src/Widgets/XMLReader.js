import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import CopyToClipboardTextArea from './CopyToClipboardTextArea';

export const XMLReader = () => {

    const [selectedFile, setFile] = useState();
    const [number, setNum] = useState(0);
    const [splitTexts, setTexts] = useState([]);

    const onFileChange = event => {
        let files = event.target.files;
        let strFiles = [];
        if (files) {
            for (let index = 0; index < files.length; index++) {
                const file = files[index];
                const fileReader = new FileReader();
                fileReader.onloadend = () => {
                    strFiles.push(fileReader.result);
                    setFile(strFiles.join(' '));
                }
                fileReader.readAsText(file);
            }
        }
    };

    const onParseClicked = () => {
        let texts = selectedFile ? selectedFile.split(/\s+/) : [];
        setTexts(texts);
        setNum(texts.length);
    }

    return (
        <Row className="reader">
            <Col>
                <h3>
                    Read number of words in text file
            </h3>
                <p>Words are counted when there is a space between them only</p>
                <Row>
                    <Col md="6">
                        <input type="file" onChange={onFileChange} multiple />
                        <button onClick={onParseClicked}>
                            Count
                </button>
                    </Col>
                    <Col md="6"><h2>{number} word{number > 1 && 's'}</h2></Col>
                </Row>
                {splitTexts.length > 0 &&
                    <Row className="displayText">
                        <Col md={12}>
                            <CopyToClipboardTextArea text={[splitTexts.join(' ')]} />
                        </Col>
                    </Row>
                }
            </Col>
        </Row>
    );
}