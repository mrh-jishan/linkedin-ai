import {AimOutlined} from "@ant-design/icons";
import {Button, FloatButton, Modal, Space, Steps} from "antd";
import {useEffect, useState} from "react";
import GeneratedContent from "~components/GeneratedContent";
import JobContentForm from "~components/JobContentForm";

export interface IJobContent {
    title: string;
    company: string;
    skills: string;
    description: string;
    selection: string;
}

const AppUi = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<IJobContent>({
        title: "",
        company: "",
        skills: "",
        description: "",
        selection: "both"
    });
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (open) {
            const title = document.querySelector(".job-details-jobs-unified-top-card__job-title")?.textContent?.trim() || "N/A";
            const company = document.querySelector(".job-details-jobs-unified-top-card__company-name")?.textContent?.trim() || "N/A";
            const description = document.querySelector(".jobs-description__container")?.textContent?.trim() || "N/A";
            const skills = document.querySelector(".job-details-how-you-match__skills-section-descriptive-skill")?.textContent?.trim() || "N/A";
            setFormData({title, company, skills, description, selection: "both"});
        }
    }, [open]);

    const toggleDialog = () => setOpen(prev => !prev);

    const handleClose = () => {
        setOpen(false);
        setCurrent(0);
    };

    const steps = [
        {key: 1, title: "Job Details"},
        {key: 2, title: "Result"}
    ];

    const getFooterButtons = () => {
        return [
            <Button key="back" onClick={toggleDialog}>Cancel</Button>,
            current === 0 && <Button key="generate" type="primary" onClick={() => setCurrent(1)}>Generate</Button>,
            current === 1 && <Button key="modify" type="primary" onClick={() => setCurrent(0)}>Modify</Button>
        ];
    };

    return (
        <>
            <FloatButton
                onClick={toggleDialog}
                shape="circle"
                type="primary"
                style={{right: "30px", bottom: "80px"}}
                icon={<AimOutlined/>}
            />
            <Modal
                title="Create AI Resume & Cover Letter"
                centered
                open={open}
                onOk={handleClose}
                onCancel={handleClose}
                width={1000}
                footer={getFooterButtons}
            >
                <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                    <Steps current={current} items={steps}/>
                    {current === 0 && <JobContentForm formData={formData} setFormData={setFormData}/>}
                    {current === 1 && <GeneratedContent formData={formData}/>}
                </Space>
            </Modal>
        </>
    );
};

export default AppUi;
