/*
AI/index.tsx
: AI 첨삭
*/

import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';

const Input = (): ReactElement => {
  const [content, setContent] = useState<string>('');
  const [contentLength, setContentLength] = useState<number>(0);

  const options = {
    acceptSuggestionOnCommitCharacter: false,
    acceptSuggestionOnEnter: 'off',
    cursorBlinking: 'blink',
    cursorSmoothCaretAnimation: false,
    cursorStyle: 'line',
    colorDecorators: false,
    fontSize: 16,
    fontLigatures: false,
    letterSpacing: 1.3,
    lineHeight: 25,
    wordWrap: 'on',
    snippetSuggestions: 'none',
  };

  const handleEditorChange = (value: any) => {
    if (value.length > 500) {
      setContent(value.slice(0, 500)); // 500자 제한
    }
    setContentLength(value.length);
  };

  const handleSubmitButton = () => {
    // 분석 api 호출 및 보여주기
  };

  return (
    <InputContainer>
      <EditorContainer>
        <Editor
          width="100%"
          height="300px"
          defaultLanguage="markdown"
          theme="light"
          value={content}
          options={options}
          onChange={handleEditorChange}
        />
      </EditorContainer>
      <P>공백 포함 500자까지 분석합니다. ( {contentLength} / 500 )</P>
      <Button onClick={handleSubmitButton}>분석하기</Button>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const EditorContainer = styled.div`
  width: 80%;
  padding: 3px;
  border: 2px solid ${({ theme }) => theme.colors.whiteD9};
  border-radius: 8px;
`;
const P = styled.p`
  width: 80%;
  margin-top: 10px;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: normal;
`;

const Button = styled.button`
  width: 20%;
  height: 65px;
  margin: 50px 0 100px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

export default Input;
