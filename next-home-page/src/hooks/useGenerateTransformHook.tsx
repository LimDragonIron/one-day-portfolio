import { MOTION_OFFSET } from '@/constants/constants'
import { useScroll, useTransform } from 'framer-motion'

const useGenerateTransformHooks = (index: number) => {
  const { scrollY } = useScroll()
  const start = MOTION_OFFSET.JOKE_MAIN_TITLE_OPACITY[0] + 800 * index
  const end = start + 700

  const opacity = useTransform(
    scrollY,
    [start, start + 100, end - 100, end],
    [0, 1, 1, 0]
  )

  const translateY = useTransform(scrollY, [start, end], [50, -150])

  return { opacity, translateY }
}

export default useGenerateTransformHooks
