import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormikContext } from 'formik';


export default function CKEditorComponent(props){
        const {setFieldValue} = useFormikContext();
        console.log('props', props.value);
        return (
            <CKEditor
            config={
                {
                    placeholder: props.placeholder,
                    value: props.value
                }
            } 
            editor={ ClassicEditor }
            // value= { props.}
            // onReady={ editor => {
            //     // You can store the "editor" and use when it is needed.
            //     console.log( 'Editor is ready to use!', editor );
            // } }
            onChange={ ( event, editor ) => {
                let data = editor.getData();
                data=data.slice(3,-4)//this delete html code <p> </p>
                setFieldValue("content",data)
                
                
            } }
            /*onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
                
            } }*/
            />
        )
    }