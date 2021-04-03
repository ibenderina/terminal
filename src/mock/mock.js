export const Operators = {
  mts: {
    operatorName: 'mts',
    text: 'МТС',
    },
  beeline: {
    operatorName: 'beeline',
    text: 'Билайн',
    },
  megafon: {
    operatorName: 'megafon',
    text: 'Мегафон',
    },
}

export const MySocialList = {
  telegram: {
    icon: 'tg.svg',
    link: 'tg://resolve?domain=ibenderina',
    text: 'Написать в Телеграм'
  },
  instagram: {
    icon: 'insta.svg',
    link: 'https://www.instagram.com/stormy.flame/',
    text: 'Перейти в Инстаграм'
  },
  whatsapp: {
    icon: 'whatsapp.svg',
    link: '',
    text: 'Написать в Whats App'
  }
}

export const InputList = {
  phone: {
    placeholder: 'Пополняемый номер',
    id: 'phone-number',
    mask: '+7 (999) 999-99-99',
  },
  'pay-sum': {
    placeholder: 'Сумма',
    id: 'pay-sum',
    description: 'От 1 до 1000 рублей',
    mask: '1000'
  },
}

export const ButtonList = {
  submit: {
    type: 'submit',
    text: 'Оплатить',
  },
}

export const SystemsList = {
  'visa': {
    icon: '/img/visa.svg',
  },
  'master-card': {
    icon: '/img/mastercard.svg',
  },
  'maestro': {
    icon: '/img/maestro.svg',
  },
}
