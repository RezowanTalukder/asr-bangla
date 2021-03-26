import { Button, Select } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const { Option } = Select;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  box-sizing: border-box;
  margin-left: 0.5rem;
`;
interface Props {
  onModelChange: (value: string) => void;
  onModelSelect: (value: string) => void;
  loading: boolean;
}

export const models: Array<{ name: string; path: string }> = [
  {
    name: "Bangla ASR",
    path: "bangla_model.tar.gz",
  },
  {
    name: "Indian English",
    path: "vosk-model-small-en-in-0.4.tar.gz",
  }
];

const ModelLoader: React.FunctionComponent<Props> = ({
  onModelChange,
  onModelSelect,
  loading,
}) => {
  const [model, setModel] = useState(models[0].path);

  return (
    <Wrapper>
      <Select
        style={{
          height: "2rem",
          margin: "auto 0",
          width: "10rem",
        }}
        defaultValue={models[0].path}
        onChange={(value: string) => {
          onModelChange(value);
          setModel(value);
        }}
      >
        {models.map((model, index) => (
          <Option value={model.path} key={index}>
            {model.name}
          </Option>
        ))}
      </Select>
      <StyledButton onClick={() => onModelSelect(model)}>
        {loading ? "Loading..." : "Load"}
      </StyledButton>
    </Wrapper>
  );
};

export default ModelLoader;
