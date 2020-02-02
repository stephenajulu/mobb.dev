import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
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

export const StyledTextarea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: 2px solid #333;
  padding: 10px;
  margin-bottom: 10px;
  color: #333;
  outline: none;
  height: 150px;
  resize: none;

  &:last-child {
    margin-bottom: 0;
  }

  .dark-mode & {
    border-color: #f5f3ce;
    color: #f5f3ce;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  background-color: transparent;
  border: 2px solid #333;
  padding: 10px;
  margin-right: 20px;
  color: #333;
  outline: none;

  .dark-mode & {
    border-color: #f5f3ce;
    color: #f5f3ce;

    option {
      color: #f5f3ce;
    }
  }
`;

export const StyledCheckbox = styled.div`
  position: relative;
  padding-left: 25px;
  display: inline-block;
  cursor: pointer;

  label {
    margin-bottom: 0 !important;
    cursor: pointer;
  }

  input {
    position: absolute;
    top: 2px;
    left: 0;
    width: 0;
    height: 0;
    appearance: none;
    outline: none;
    cursor: pointer;

    &:before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      border: 2px solid #333;
      cursor: pointer;

      .dark-mode & {
        border-color: #f5f3ce;
      }
    }

    &:after {
      content: '';
      display: block;
      width: 6px;
      height: 12px;
      position: absolute;
      top: 50%;
      left: 7px;
      margin-top: 2px;
      border-right: 2px solid #f5f3ce;
      border-bottom: 2px solid #f5f3ce;
      transform: rotate(45deg);
      opacity: 0;
      visibility: hidden;

      .dark-mode & {
        border-color: #333;
      }
    }

    &:checked {
      &:before {
        background-color: #333;

        .dark-mode & {
          background-color: #f5f3ce;
        }
      }

      &:after {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export const StyledRadiobutton = styled.div`
  position: relative;
  padding-left: 25px;
  display: inline-block;
  cursor: pointer;
  margin-right: 10px;

  label {
    margin-bottom: 0 !important;
    cursor: pointer;
  }

  input {
    position: absolute;
    top: 2px;
    left: 0;
    width: 0;
    height: 0;
    appearance: none;
    outline: none;
    cursor: pointer;

    &:before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      border: 2px solid #333;
      cursor: pointer;
      border-radius: 50%;

      .dark-mode & {
        border-color: #f5f3ce;
      }
    }

    &:after {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      position: absolute;
      top: 50%;
      left: 6px;
      margin-top: 6px;
      background-color: #f5f3ce;
      opacity: 0;
      visibility: hidden;
      border-radius: 50%;

      .dark-mode & {
        background-color: #333;
      }
    }

    &:checked {
      &:before {
        background-color: #333;

        .dark-mode & {
          background-color: #f5f3ce;
        }
      }

      &:after {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export const StyledButton = styled.button`
  background: transparent;
  border: 2px solid #333;
  color: #333;
  padding: 8px 20px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 20px;

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &:hover:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background: #333;
    color: #f5f3ce;
  }

  .dark-mode & {
    color: #f5f3ce;
    border-color: #f5f3ce;

    &:hover {
      background: #f5f3ce;
      color: #333;
    }
  }

  @media (max-width: 576px) {
    display: block;
    width: 100%;
  }

  ${({ active }) =>
    active &&
    css`
      color: #f5f3ce !important;
      background-color: #333 !important;

      .dark-mode & {
        color: #333 !important;
        background-color: #f5f3ce !important;
      }
    `}
`;
