// 현재 시간에 맞춰 스케줄 표시
window.onload = function(){

	(function cur_program(){
		let arr_prog_time = [];
		let $lists = document.querySelectorAll("#time_table ul li");
		let $prog_each_time = document.querySelectorAll("#time_table ul li p.time");
		let cur_num;

		for(var i = 0; i < $prog_each_time.length - 1; i++){
			var value = $prog_each_time[i].innerText;
			value = value.replace(":", "");
			arr_prog_time[i] = value;
		}

		let $date = new Date();
		let _hours = $date.getHours() < 10 ? "0"+ $date.getHours() : $date.getHours();
		let _minutes = $date.getMinutes() < 10 ? "0"+ $date.getMinutes() : $date.getMinutes();
		let cur_time = String(_hours) + String(_minutes);

		for(let i = 0; i < $prog_each_time.length - 1; i++){
			if(cur_time >= arr_prog_time[i] && cur_time < arr_prog_time[i + 1]){
				cur_num = i;
				for(let k = 0; k < $lists.length - 1; k++){
					$lists[k].classList.remove("active");
				}
				$lists[cur_num].classList.add("active");
				break;
			}
		}

	})();

}