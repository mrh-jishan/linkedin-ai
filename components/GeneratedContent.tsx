import React from "react";
import {Flex} from "antd";
import type {IJobContent} from "~app-ui";

const GeneratedContent: React.FC<{ formData: IJobContent; }> = ({
                                                                    formData
                                                                }) => {
    return (
        <Flex vertical gap="small">
            {JSON.stringify(formData)}
        </Flex>
    );
};

export default GeneratedContent;
