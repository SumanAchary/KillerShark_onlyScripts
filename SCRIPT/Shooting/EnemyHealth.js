#pragma strict

var Health = 100;
var BloodEffect : Transform;


function explode()
{
		Instantiate(BloodEffect,transform.position,transform.rotation);
}

function ApplyDammage (TheDammage : int)
{
	Health -= TheDammage;
	explode();
	if(Health <= 0)
	{
		Dead();
	}
}

function Dead()
{
	Destroy (gameObject);
}