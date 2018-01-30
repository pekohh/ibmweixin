import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Avatar from '@/components/avatar/avatar'
// import Ewm from '@/components/ewm/ewm'
import Personal from '@/components/personal/personal'
import meRicheng from '@/components/erNav/me-richeng/me-richeng'
import meInformation from '@/components/erNav/me-information/me-information'
import meDown from '@/components/erNav/me-down/me-down'

import searchs from '@/components/searchs/searchs'

import jianjie from '@/components/Erhome/jianjie/jianjie'
import richeng from '@/components/Erhome/richeng/richeng'
import speaker from '@/components/Erhome/speaker/speaker'
import information from '@/components/Erhome/information/information'

import hotel from '@/components/Erhome/information/sinformation/hotel/hotel'
import weather from '@/components/Erhome/information/sinformation/weather/weather'
import transform from '@/components/Erhome/information/sinformation/transform/transform'

import wenjuandiaocha from '@/components/Erhome/wenjuandiaocha/wenjuandiaocha'
import discussion from '@/components/Erhome/discussion/discussion'
import write from '@/components/Erhome/discussion/write/write'
import download from '@/components/Erhome/download/download'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/avatar',
      name: 'Avatar',
      component: Avatar
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      children: [
        {
          path: 'me-richeng',
          component: meRicheng
        },
        {
          path: 'me-information',
          component: meInformation
        },
        {
          path: '/',
          redirect: 'me-information'
        },
        {
          path: 'me-download',
          component: meDown
        }
      ]
    },
    {
      path: '/search',
      name: 'searchs',
      component: searchs
    },
    {
      path: '/jianjie',
      component: jianjie
    },
    {
      path: '/richeng',
      component: richeng
    },
    {
      path: '/speaker',
      component: speaker
    },
    {
      path: '/information',
      component: information,
      children: [
        {
          path: 'hotel',
          component: hotel
        },
        {
          path: 'weather',
          component: weather
        },
        {
          path: 'transform',
          component: transform
        }
      ]
    },
    {
      path: '/wenjuandiaocha',
      component: wenjuandiaocha
    },
    {
      path: '/discussion',
      component: discussion,
      children: [
        {
          path: 'write',
          component: write
        }
      ]
    },
    {
      path: '/download',
      component: download
    }
  ]
})
