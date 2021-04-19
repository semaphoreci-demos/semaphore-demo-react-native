/**
 *
 * Input
 *
 */
import omit from 'lodash/omit';
import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import Text from 'theme/Text';
import style, {inputStyleProps} from './style';

export interface InputProps extends TextInputProps {
  error?: string | React.ReactNode;
  label?: string | React.ReactNode;
}

const Input = React.forwardRef(
  (props: InputProps, ref: React.Ref<TextInput>) => (
    <>
      {props.label ? (
        <Text style={style.label} testID={`${props.testID}_LABEL`}>
          {props.label}
        </Text>
      ) : null}
      <TextInput
        clearButtonMode="unless-editing"
        {...inputStyleProps}
        blurOnSubmit
        {...omit(props, ['label', 'error'])}
        ref={ref}
        style={[
          style.input,
          props.label ? style.inputWithLabel : {},
          props.error ? style.errorInput : {},
          props.multiline ? style.multiline : {},
          props.style,
        ]}
      />
      {props.error ? (
        <Text style={style.error} testID={`${props.testID}_ERROR`}>
          {props.error}
        </Text>
      ) : null}
    </>
  ),
);

export default Input;
