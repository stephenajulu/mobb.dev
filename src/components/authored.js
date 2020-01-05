import React from 'react';
import styled from 'styled-components';

import RichText from '../components/rich-text';
import Dropzone from '../components/dropzone';

const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: 2px solid #333;
  padding: 10px;
  margin-bottom: 10px;
  color: #333;
  outline: none;

  .dark-mode & {
    border-color: #f5f3ce;
    color: #f5f3ce;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: 2px solid #333;
  padding: 10px;
  margin-bottom: 10px;
  color: #333;
  outline: none;
  height: 150px;
  resize: none;

  .dark-mode & {
    border-color: #f5f3ce;
    color: #f5f3ce;
  }
`;

const Authored = props => {
  const handleTitle = event => {
    const url = event.target.value
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '');

    props.setData({
      ...props.data,
      title: event.target.value,
      url,
    });
  };
  return (
    <div>
      <h3>2. Upload cover photo</h3>

      <Dropzone
        onUpload={file => props.setData({ ...props.data, image: file })}
      />

      <h3>3. Now make some magic</h3>

      <StyledInput
        type="text"
        placeholder="Add title"
        value={props.data.title}
        onChange={handleTitle}
      />

      <StyledTextarea
        placeholder="Add description"
        value={props.data.description}
        onChange={event =>
          props.setData({
            ...props.data,
            description: event.target.value,
          })
        }
      />

      <RichText
        edit={true}
        data={props.data.content}
        onChange={content => props.setData({ ...props.data, content })}
      />
    </div>
  );
};

export default Authored;
