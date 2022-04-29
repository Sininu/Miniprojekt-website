
<form action="" method="post" enctype="multipart/form-data">
    <table>
        <thead>
        <tr>
            <th> IMage            </th>
        </tr>
        </thead>
        <?php
        $connection = mysqli_connect("localhost","root","" );
        $db = mysqli_select_db($connection, "youtubedb");
        $query = "SELECT * FROM 'empimage' ";
        $query_run = mysqli_query($connection, $query);

        while($row = mysqi_fetch_array($query_run))
        {
            ?>
            <tr>
                <td>
                    <?php echo "<img src='data:image;base64,' "?>
                </td>
            </tr>
            <?php
        }

        ?>
    </table>

    <div class = "form-group">
                <label for="image">select image File: </label>
                <label type="file" name="image" class="form-control">

            </div>
            <input type="submit" name="submit" class="btn-primary" value="Upload">
        </form>



</html>