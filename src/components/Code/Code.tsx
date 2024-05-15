import { SandpackCodeEditor, SandpackPreview, SandpackProvider, UnstyledOpenInCodeSandboxButton } from '@codesandbox/sandpack-react'
import React from 'react'
import { sandpackTheme } from './sandpackTheme';
 
interface CodeProps {
  title: string;
  files: Record<string, string>;
  deps: Record<string, string>;
}

export const Code = ({ title, files, deps }: CodeProps) => {
  return (
    <div className='my-6 border-primary border-2 rounded-md'>
      <SandpackProvider template="react-ts" files={files} theme={sandpackTheme} options={{ classes: {
        'sp-preview-container': 'rounded-md'
      }}} customSetup={{
        dependencies: deps,
      }}>
        <div className="p-2 bg-primary">
          {title || 'Code Playground'}
        </div>

          <SandpackCodeEditor wrapContent />

        <hr className="border-primary" />

        <div className="p-2">
          <SandpackPreview />
        </div>
      </SandpackProvider>
    </div>
  )
}
