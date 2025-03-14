import styles from '@/styles/toast-provider.module.sass'
import { ToastContext } from '@/context/ToastContext'
import { ReactNode, useState } from 'react'
import Toast from '@/components/Toast'

interface ToastType {
  id: number
  message: string
  type: string
}

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastType[]>([])

  function showToast(message: string, type: 'success' | 'error' = 'error') {
    const id = Date.now()

    setToasts(prev => [...prev, { id, message, type }])

    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id))
    }, 4000)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={styles.toast_container}>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type as 'error'}
            onClose={() =>
              setToasts(prev => prev.filter(t => t.id !== toast.id))
            }
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}
