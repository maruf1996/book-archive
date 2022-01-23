const searchBook=()=>{
    const searchTag=document.getElementById('search_text');
    const searchText=searchTag.value;
    searchTag.value='';

    if(searchText==='' || searchText===' '){
        alert('search result not found');
    }
    else{
        const url=`https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>DisplaySearchResult(data.docs))
    }
}

const DisplaySearchResult=books=>{
    
    const searchResult=document.getElementById('search_result');
    searchResult.textContent='';
    books.forEach(book => {
    // console.log(book);

        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-100" alt="">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-title">Author: ${book.author_name}</h6>
                    <h6 class="card-title">Publisher: ${book.publisher.slice(0,2)}</h6>
                    <p class="card-text">First Published by ${book.publish_date[0]}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);

        const totalSearchFound=document.getElementById('total_search_found');
        totalSearchFound.style.border='2px solid teal';
        totalSearchFound.style.fontSize='22px';
        totalSearchFound.style.padding="10px";
        totalSearchFound.innerText=`${books.length} result found`;

    });
}
