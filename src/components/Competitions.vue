<template>
    <div class="container">
            <h2>Competitions</h2>
            <!-- Schedule -->
            <div id="Schedule">
                <h2 style="text-align: center; background-color: rgb(127, 232, 255);">Schedule</h2>
                <div class="d-flex flex-column align-items-center">
                    <div class="d-flex justify-content-start w-75 mb-4">
                        <div class="p-3 border rounded bg-light shadow" style="width: 40%;">
                            <h5>Contest 1</h5>
                            <p>25/08/2025</p>
                            <p>Deakin University</p>
                        </div>
                        <img src="../assets/pic1.jpg" alt="pic 1" class="ms-3" width="150" height="150">
                    </div>
                    <div class="d-flex justify-content-end w-75 mb-4">
                        <div class="p-3 border rounded bg-light shadow" style="width: 40%;">
                            <h5>Contest 2</h5>
                            <p>26/08/2025</p>
                            <p>Monash University</p>
                        </div>
                        <img src="../assets/pic2.jpg" alt="pic 2" class="ms-3" width="150" height="150">
                    </div>
                    <div class="d-flex justify-content-start w-75 mb-4">
                        <div class="p-3 border rounded bg-light shadow" style="width: 40%;">
                            <h5>Contest 3</h5>
                            <p>27/08/2025</p>
                            <p>La Trobe University</p>
                        </div>
                        <img src="../assets/pic3.jpg" alt="pic 3" class="ms-3" width="150" height="150">
                    </div>

                    <div class="d-flex justify-content-end w-75 mb-4">
                        <div class="p-3 border rounded bg-light shadow" style="width: 40%;">
                            <h5>Contest 4</h5>
                            <p>28/08/2025</p>
                            <p>Victoria University</p>
                        </div>
                        <img src="../assets/pic4.jpg" alt="pic 4" class="ms-3" width="150" height="150">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <!-- Results -->
            <h2 style="text-align: center; background-color: rgb(127, 232, 255);">Results</h2>
            <div id="Results">
            <div class="table-responsive" style=" max-height: 800px; overflow-y: auto;">
                <table class="table table-bordered text-center">
                    <tr>
                        <th>Date</th>
                        <th>Player</th>
                        <th>Odds</th>
                    </tr>
                    <tr>
                        <td rowspan="2">19-AUG-2025</td>
                        <td>Timmy Nguyen</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Tommy Nguyen</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td rowspan="2">18-AUG-2025</td>
                        <td>Jason Pham</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Anthony Lai</td>
                        <td>2</td>
                    </tr>
                </table>
            </div>
            </div>
        </div>
</template>