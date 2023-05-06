import homeRoute from '@/modules/home/routes'
import sobreRoute from '@/modules/sobre-mim/routes'
import experienciasRoute from '@/modules/experiencias/routes'
import conhecimentosRoute from '@/modules/conhecimentos/routes'

export default [
    ...homeRoute,
    ...sobreRoute,
    ...experienciasRoute,
    ...conhecimentosRoute,
]