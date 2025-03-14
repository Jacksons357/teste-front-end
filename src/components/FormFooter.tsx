import styles from '@/styles/components/form-footer.module.sass'
import Input from './Input'
import Button from './Button'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '@/lib/hooks/useToast'

const schemaValidation = z.object({
  name: z
    .string()
    .min(3, 'O nome deve ser informado com pelo menos 3 caracteres'),
  email: z.string().email('Digite um email válido'),
  terms: z.literal(true, {
    errorMap: () => ({
      message: 'Para se inscrever, você deve aceitar os termos!',
    }),
  }),
})

type FormSchema = z.infer<typeof schemaValidation>

export default function FormFooter() {
  const { showToast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(schemaValidation),
  })

  function onSubmit() {
    showToast('Inscrição solicitada com sucesso!', 'success')

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container_form}>
      <div className={styles.container_form_content}>
        <div className={styles.container_form_input}>
          <Input
            type="text"
            placeholder="Digite seu nome"
            {...register('name')}
          />
          {errors.name && (
            <span className={styles.input_errors}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.container_form_input}>
          <Input
            type="email"
            placeholder="Digite seu email"
            {...register('email')}
          />
          {errors.email && (
            <span className={styles.input_errors}>{errors.email.message}</span>
          )}
        </div>

        <div>
          <Button text="INSCREVER" variant="primary" />
        </div>
      </div>
      <label htmlFor="checkbox">
        <input type="checkbox" id="checkbox" {...register('terms')} />
        Aceito os termos e condições
      </label>
      {errors.terms && (
        <span className={styles.input_errors}>{errors.terms.message}</span>
      )}
    </form>
  )
}
