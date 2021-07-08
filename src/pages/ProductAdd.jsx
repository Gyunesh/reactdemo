import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FormField, Button, Label } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }

    const schema = Yup.object({
        productName: Yup.string().required("Urun adi zorunlu"),
        unitPrice: Yup.number().required("Urun fiyati zorunlu")
    })

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form className="ui form">
                <KodlamaIoTextInput name="productName" placeholder="Urun Adi" />
                <KodlamaIoTextInput name="unitPrice" placeholder="Urun Fiyati" />
                {/* <FormField>
                    <Field name="productName" placeholder="Urun Adi"></Field>
                    <ErrorMessage name="productName" render={error =>
                        <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage>
                </FormField> */}
                <Button color="green" typr="submit">Ekle</Button>
            </Form>
        </Formik>

    )
}
