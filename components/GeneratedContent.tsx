import React, {useState} from "react";
import {Flex} from "antd";
import type {IJobContent} from "~app-ui";
import {marked} from "marked";
import "~/styles.scss"

const GeneratedContent: React.FC<{ formData: IJobContent; }> = ({formData}) => {

    const [markdown, setMarkdown] = useState('');

    const getMarkdownText = () => {
        const rawMarkup = marked(markdown) as string;
        return {__html: rawMarkup};
    };

    return (
        <Flex vertical gap="small">
            <div className="marked-containers">
                <div className="marked-container">
                    <textarea
                        value={markdown}
                        className="marked-input"
                        onChange={(e) => setMarkdown(e.target.value)}
                    />
                </div>
                <div className="marked-container">
                    <div
                        className="marked-output"
                        dangerouslySetInnerHTML={getMarkdownText()}
                    />
                </div>
            </div>
        </Flex>
    );
};

export default GeneratedContent;
