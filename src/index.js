import _ from 'lodash'
import './index.scss'

import { sum } from '@/foo/index'

console.log(_.join(['Hello', 'World'], '-'))

const dvElem = document.createElement('div')
dvElem.innerHTML = 'title'
dvElem.className = 'title'
document.body.appendChild(dvElem)

console.log(sum(2,3 ))