import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Container, FormContainer } from "./styles";
import { activitySchema } from "components/Forms/schemas";
import { FormikForm } from "components/Forms";
import { FormField } from "components/Forms/formField";
import { getService } from "services/apiService";
import { ENDPOINT_ACTIVITIES } from "services/settings";
import { TiArrowBack } from "react-icons/ti";
import { createActivities, updateActivities } from "store/slices/activities";
import { useSelector } from "react-redux";
import { alertToast } from "services/alerts";
import Loader from "components/utils/Loader";
import CKEditor from 'components/Forms/CKEditor/CreateCKEditor'



const FormFields = (editar=false, ckeditorContent) => {
  return (
    <>
      <FormField
        name="name"
        type="text"
        placeholder="Nombre"
        FormContainer={FormContainer}
      />
      <FormField
        name="content"
        type="text"
        placeholder="Descripcion"
        FormContainer={FormContainer}
        value={ckeditorContent}
        as ={CKEditor}
      />
      <Button type="submit">{editar ? 'Editar' : 'Agregar'}</Button>
    </>
  )
}

export const ActivityForm = () => {
  const {isError, isSuccess, isLoading, message } = useSelector(state => state.activities)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const params = useParams()

  const values = {
    name: '',
    content: ''
  }

  const [activity, setActivity] = useState(values);

  useEffect(() => {
    (async () => {
      if (params.id) {
        const response = await getService(ENDPOINT_ACTIVITIES, params.id);
        const { name, content } = response.data

        setActivity({
          name,
          content,
        });
      }
    })()
  }, [params.id]);

  const handleSubmit = (values,actions) => {
    if (params.id) {
      dispatch(updateActivities({...values, id:params.id}))
    } else {
      dispatch(createActivities(values))
    }
    if (isSuccess) alertToast('success',params.id ?'Actividad editada correctamente!':'Actividad agregada correctamente!')
    if (isError) alertToast('error',message)

    actions.setSubmitting(false);
    actions.resetForm();
    navigate("/backoffice/activities")
  }

  
  if(isLoading) return <Loader />

  return (
    <Container>
      <Link to={`/backoffice/activities`}><TiArrowBack /> Volver a Actividades</Link>
      <FormikForm
        title="Back Office"
        subtitle="Administracion de actividades"
        operationName= {params.id ? 'Editar' : 'Agregar'}
        values={activity}
        schema={activitySchema}
        onSubmit={handleSubmit}
        FormFields={() => FormFields(params.id ? true : false, activity.content)}
      />
    </Container>
  )
}


