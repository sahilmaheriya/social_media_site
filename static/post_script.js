


let like_form = $('.like-form')

$('.like-form').submit(function(e){
    e.preventDefault();
    const post_id = $(this).attr('id')
    const csr = $("input[name='csrfmiddlewaretoken']").val()
    console.log(post_id);
    $.ajax({
        type:'POST',
        url:'/posts/liked/',
        data:{
            'csrfmiddlewaretoken':csr,
            'post_id':post_id,
        },
        success: function(data){
            console.log(data.value);
            $(`#num_likes${post_id}`).html(`${data.likes}`)
            if(data.value == 'Like'){
                $(`.like-btn${post_id}`).addClass('text-danger')
            }
            
            if(data.value == 'Unlike'){
                $(`.like-btn${post_id}`).removeClass('text-danger')
            }
            
            if($(`.like-icon${post_id}`).hasClass('text-danger')){
                $(`.like-icon${post_id}`).removeClass('text-danger')
            }
        },
        error: function(err){
            console.log('error occure!');
        }
    })
})


$('.comment_btn').click(function(){
    let id = $(this).attr('id')
    $(`#all_comments${id}`).toggleClass('d-none')
})

// $(document).ready(function(){
//     let display = false
//     $('.comment_btn').click(function(){
//         if (display === false){
//             $(this).next('.all_comments').show('slow');
//             display = true
//         }
//         else{
//             $(this).next('.all_comments').hide('slow')
//             display = false
//         }
//     })
// })


// let n = $('#like-btn').attr('data-sid')

// console.log(n);

// $('#like-btn').click(function(){
//     let post_id = $(this)
//     console.log(post_id);
//     let csr = $("input[name='csrfmiddlewaretoken']").val()
//     mydata = {
//         post_id:post_id,
//         csrfmiddlewaretoken:csr,
//     }
//     $.ajax({
//         method:'POST',
//         url:'liked/',
//         data:mydata,
//         success: function(data){
//             console.log(data.value);
//             console.log(data.total_likes);
//             if (data.value == 'Like'){
//                 $('#like-btn').css('color', 'red')
//             }
//             else{
//                 $('#like-btn').css('color','black')
//             }
//             $('#num_likes').html(`${data.total_likes}`)
//         }
//     })
// })