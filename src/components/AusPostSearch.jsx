import React, {useState, useEffect} from 'react';
import axios from 'axios'
// import child components AusPostSearch component will be using
import SearchForm from './SearchForm'

const BASE_URL = 'https://digitalapi.auspost.com.au'
const API_KEY = '872608e3-4530-4c6a-a369-052accb03ca8'

// const infoUrl = `${AUSPOST}`