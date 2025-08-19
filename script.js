// https://rickandmortyapi.com/api

const pageInput = document.getElementById("pageInput")
const searchBtn = document.getElementById("searchBtn")
const resultsDIv = document.getElementById("results")

async function fetchCharacters(page){
    resultsDIv.innerHTML = "<p>Carregando...</p>"

try {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    console.lo(data)
} catch (error) {
    resultsDIv.innerHTML = "<p>Erro ao buscar personagens!</p>"
    
}




}
fetchCharacters()