import React from 'react';
import { FormSpy } from 'react-final-form';

export default function DebugForm() {
  return (
    <FormSpy subscription={{ values: true }}>
      {({ values }) => <pre>{JSON.stringify(values, null, 2)}</pre>}
    </FormSpy>
  );
}
