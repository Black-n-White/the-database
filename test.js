rickroll = document.getElementById( 'rickroll' );
btn = document.getElementById( 'submitBtn' );
input = document.getElementById( 'input' );
errorText = document.getElementById( 'errorText' );
container = document.getElementById( 'container' );
info = document.getElementById( 'info' );
correctValue = 'Hello';

btn.addEventListener( 'click', () =>
{
    if ( input.value == correctValue )
    {
        container.style.display = 'none';
        rickroll.style.display = 'block';
        rickroll.requestFullscreen();
        const sound = new Audio( './rickroll.mp3' );
        sound.play();
        setTimeout( () =>
        {
            sound.pause();
            rickroll.style.display = 'none';
            document.exitFullscreen()
            info.style.display = 'block';
        }, 10000 );
    }
    else
    {
        errorText.style.opacity = 100;
    }
} );