import {Flex, Input, Radio} from "antd"
import TextArea from "antd/es/input/TextArea"
import React from "react"

import type {IJobContent} from "~app-ui"

export interface iJobContentForm {
    formData: IJobContent
    setFormData: (formData: IJobContent) => void
}

const JobContentForm: React.FC<iJobContentForm> = ({
                                                       formData,
                                                       setFormData
                                                   }) => {
    return (
        <Flex vertical gap="small">
            <Input
                name="title"
                value={formData.title}
                onChange={(e) =>
                    setFormData({...formData, [e.target.name]: e.target.value})
                }
                placeholder="Title"
            />
            <Input
                name="company"
                value={formData.company}
                onChange={(e) =>
                    setFormData({...formData, [e.target.name]: e.target.value})
                }
                placeholder="Company"
            />
            <Input
                name="skills"
                value={formData.skills}
                onChange={(e) =>
                    setFormData({...formData, [e.target.name]: e.target.value})
                }
                placeholder="Skills"
            />
            <TextArea
                name="description"
                value={formData.description}
                onChange={(e) =>
                    setFormData({...formData, [e.target.name]: e.target.value})
                }
                placeholder="Description"
                autoSize={{minRows: 3, maxRows: 15}}
            />

            <Radio.Group
                name="selection"
                onChange={(e) =>
                    setFormData({...formData, [e.target.name]: e.target.value})
                }
                value={formData.selection}>
                <Radio value="resume">Resume</Radio>
                <Radio value="cover-letter">Cover Letter</Radio>
                <Radio value="both">Both</Radio>
            </Radio.Group>

        </Flex>
    )
}

export default JobContentForm
