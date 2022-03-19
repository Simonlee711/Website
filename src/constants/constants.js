export const projects = [
  {
    title: '"Translating" the Code of Life',
    description: "A Methods research project to tackle a problem in single-cell RNA sequencing data. We wish to build a modalities predictor (GEX->ATAC & ATAC->GEX), and use the t-5 small, a NLP attention based model developed by Google. We take this model and change its architecture slightly to transform it from a NLP based model to a biology based mondel. This Project was done in collaboration with Vedu Mallela at Georgia State University and Razvan Marinescu at Massachusetts Institute of Technology",
      image: '/images/brain.jpg',
      tags: ['Machine Learning', 'Attention', 'scRNA-seq'],
    source: 'https://github.com/Simonlee711/Research/blob/master/Transformer/2022/Transformers-Lee-2021.pdf',
    visit: 'https://github.com/Simonlee711/Research/blob/master/Transformer/2022/transformer-sc.ipynb',
    id: 0,
  },
  {
    title: 'Spectral Analysis on Covid-19',
    description:"Recent reports have been suggesting the end of the Covid-19 pandemic and the start to a seasonal endemic. We test these claims by running spectral analysis on the Covid-19 time series of 8 separate countries. The results of this research are very contradicting with that of the CDC but align with the World Health Organization (WHO)...",
    image: '/images/USA1.png',
    tags: ['Signal Processing', 'Time-series', 'Covid-19'],
    source: 'https://github.com/Simonlee711/Research/blob/master/Spectrum_Analysis/covidcase/Spectral_Analysis_of_Covid_19_Time_Series-final.pdf',
    visit: 'https://github.com/Simonlee711/Research/blob/master/Spectrum_Analysis/covidcase/analysis.py',
    id: 1,
  },
  {
    title: 'Fermi-Pasta-Tsingou',
    description: "This Physics problem is one of the most interesting numerical experiments ever done. We have a quasilinear system which we think shows zero patterns but to our surprise, the simulations have a lot of oscillating behavior. We write about these results as well as simulate these processes, all listed below in our Code.",
      image: '/images/FPUT1.1.png',
      tags: ['Quasilinear Systems', 'Physics', 'Numerical Methods'],
    source: 'https://github.com/Simonlee711/Research/blob/master/Fermi-Pasta-Ulam-Tsongu/fput-Lee-2021.pdf',
    visit: 'https://github.com/Simonlee711/Research/tree/master/Fermi-Pasta-Ulam-Tsongu/code',
    id: 2,
  },
  {
    title: 'Huffman Compression on COVID-19 Genomes',
    description: "Covid-19 research has been the most popular research during the pandemic. The study of mutations of the Covid-19 genome have been an emphasis to assess the severity of this virus. However there are nearly millions of different mutations listed on the NCBI's database. Therefore we perform a Huffman algorithm to compress Covid-19 fasta files and compare it to the standard .zip file compression.",
    image: '/images/tree.png',
    tags: ['Lossless Data Compression', 'Covid-19'],
    source: 'https://github.com/Simonlee711/Intro-to-Bioinformatics/blob/main/Simon/Compression_of_Covid_Genomes.pdf',
    visit: 'https://github.com/Simonlee711/Intro-to-Bioinformatics/blob/main/Simon/huffman.py',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2019, text: 'Started my school at UC Santa Cruz studying Applied Mathematics', },
  { year: 2020, text: 'Covid-19 year, spent majority of my time learning programming languages', },
  { year: 2021, text: 'Worked for Professor Darrell Long on a Computer Systems Textbook', },
  { year: 2022, text: 'Graduating UC Santa Cruz with a B.S. in Applied Mathematics, Researching computational biology at UCLA for summer 2022', },
];