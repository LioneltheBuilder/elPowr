'use client'

import { AnimatePresence, motion } from "framer-motion"
import { EmailSubscriptionForm } from "./EmailSubscriptionForm"

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
}

export const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-md p-6"
          >
            <div className="bg-[#202731] rounded-2xl p-6 shadow-2xl border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Register Interest</h2>
              <EmailSubscriptionForm />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}