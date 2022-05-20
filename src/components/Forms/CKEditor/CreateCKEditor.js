import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useFormikContext } from 'formik'
import { Container } from './styles'

export default function CKEditorComponent (props) {
  const { setFieldValue } = useFormikContext()
  return (
    <Container>
      <CKEditor
        config={
                    {
                      placeholder: props.placeholder
                    }
                }
        data={props.value}
        editor={ClassicEditor}
        onReady={(editor) => {
          if (editor) {
            editor.editing.view.change((writer) => {
              writer.setStyle(
                'min-height',
                '25rem',
                editor.editing.view.document.getRoot()
              )
            })
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData()
          // data=data.slice(3,-4)//this delete html code <p> </p>
          setFieldValue(`${props.name}`, data)
        }}
      />
    </Container>
  )
}
